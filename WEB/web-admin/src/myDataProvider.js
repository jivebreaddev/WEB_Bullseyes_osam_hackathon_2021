import drfProvider from 'ra-data-django-rest-framework';
import { fetchUtils } from 'ra-core';
const INITIAL = "https://osamhack2021-ai-web-bullseyes-bullseyes-q74x46j562xxgg-8000.githubpreview.dev"
const dataProvider = drfProvider(INITIAL);

const myDataProvider = {
    ...dataProvider,
    update: (resource, params) => {
        if (resource !== 'accessusers' || !params.data.photourl) {
            // fallback to the default implementation
            return dataProvider.update(resource, params);
        }
        /**
         * For posts update only, convert uploaded image in base 64 and attach it to
         * the `picture` sent property, with `src` and `title` attributes.
         */
        
        // Freshly dropped pictures are File objects and must be converted to base64 strings
        const newPictures = params.data.photourl.filter(
            p => p.rawFile instanceof File
        );
        const formerPictures = params.data.photourl.filter(
            p => !(p.rawFile instanceof File)
        );

        return Promise.all(newPictures.map(convertFileToBase64))
            .then(base64Pictures =>
                base64Pictures.map(picture64 => ({
                    src: picture64,
                    title: `${params.data.id}`,
                }))
            )
            .then(transformedNewPictures =>
                dataProvider.update(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        photourl: [
                            ...transformedNewPictures
                        ],
                    },
                })
            );
    },
};

const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });
export default myDataProvider;



// const httpClient = (url, options = {}) => {
//     if (!options.headers) {
//         options.headers = new Headers({ Accept: 'application/json' });
//     }
//     const token = localStorage.getItem('token');
//     options.headers.set('Authorization', `Bearer ${token}`);
//     return fetchUtils.fetchJson(url, options);
// };



// const myDataProfider = {
//     ...dataProvider1,
//     create: (resource, params) => {
//         if (resource !== 'users' || !params.data.photourl) {
//             // fallback to the default implementation
//             return dataProvider.create(resource, params);
//         }

//         let formData = new FormData();

        
//         formData.append('photourl', params.data.photourl);

//         return httpClient(`${INITIAL}/${resource}/`, {
//             method: 'POST',
//             body: formData,
//         }).then(({ json }) => ({
//             data: { ...params.data, id: json.id },
//         }));
//     }
// };

// export default myDataProfider;
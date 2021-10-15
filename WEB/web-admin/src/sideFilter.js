import * as React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOnOutlined';
import MailIcon from '@material-ui/icons/MailOutline';
import LocalOfferIcon from '@material-ui/icons/LocalOfferOutlined';
import { FilterList, FilterListItem } from 'react-admin';
import {
    startOfYesterday,
    endOfYesterday,
    startOfToday,
    endOfToday,
    startOfWeek,
    subWeeks
} from 'date-fns';
var date = new Date()
var isoDateTime = new Date(endOfYesterday() - (date.getTimezoneOffset() * 60000)).toISOString();

export const LastVisitedFilter = () => (
    <FilterList label="최근 날짜들" icon={<AccessTimeIcon />}>
        <FilterListItem
            label="오늘"
            value={{
                time: new Date(startOfToday() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10),
                time__contains: ""
            }}
        />
        <FilterListItem
            label="어제"
            value={{
                time: new Date(endOfYesterday() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0, 10),
                time__contains: ""
            }}
        />
        <FilterListItem
            label="모두보이기"
            value={{
                time: "",
            }}
        />
    </FilterList>
);
export const HasOrderedFilter = () => (
    <FilterList
        label="신원확인여부"
        icon={<MonetizationOnIcon />}
    >
        <FilterListItem
            label="신원확인된 인원"
            value={{
                name: "",

            }}
        />
        <FilterListItem
            label="신원미상 인원"
            value={{
                name: "미확인 자",

            }}
        />
    </FilterList>
);

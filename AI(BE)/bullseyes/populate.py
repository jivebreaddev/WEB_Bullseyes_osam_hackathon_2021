import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'bullseyes.settings')
import django
django.setup()

from bullseyes_server.models import User


def populate_db():
    adding_user("이등병","김범준","0-000-001","보통대대")
    adding_user("일병","이길동","0-000-002","우향대대")
    adding_user("병장","박시창","0-000-003","좌향대대")
    adding_user("일병","정인우","0-000-004","깃발대대")
    adding_user("이등병","김동병","0-000-005","정밀대대")
    adding_user("일병","정명진","0-000-006","우량대대")


def adding_user(rank,name,altid,company):
    p = User.objects.get_or_create(rank=rank, name=name, altid=altid, company=company)



if __name__ == '__main__':
    print("population")
    
    populate_db()
        
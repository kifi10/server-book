from shlex import split

from PIL import Image
from datetime import datetime
import sys

from django.contrib.sessions import exceptions


def PhotoSave(photo,path,idbook):
    try:
        ss=photo.name.split('.')
        PhotoFormat=photo.name.split('.')[1]
    except IndexError:
        return ''
    Nowtime=datetime.now()
    nowtime=Nowtime.strftime("%Y%m%d%H%M%S")
    imgpath=path+'/'+str(nowtime)+'_'+str(idbook)+'.'+PhotoFormat
    photo.save(imgpath)
    try:
        photo.save(imgpath)
        return imgpath
    except:
        return ''

if __name__ == "__main__":

    tempphoto = Image.open('1.JPG')
    path=u'D:/kifi'
    print PhotoSave(tempphoto,path,2)

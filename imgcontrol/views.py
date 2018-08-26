# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse,HttpResponseNotFound
from django.shortcuts import get_object_or_404
from django.contrib import auth
from django.contrib.auth.models import User
from django import forms
from imgcontrol.models import Img
from bookshop.models import BookContent,BookPrice,BookPicture
from django.contrib.auth.decorators import login_required
import json
import imgtest
import Image
import os

# Create your views here.

def showimg(request):
    Myidbook = request.GET['idbook']
    MyidbookOB = get_object_or_404(BookPicture, idbook=Myidbook)
    bookimgpath = MyidbookOB.picture
    return HttpResponse(json.dumps(bookimgpath, ensure_ascii=False), content_type="application/json")

def upload(request):
    resp = {}
    srcpath="D:/kifi"
    photoOB=request.FILES['file']
    idbook=request.POST['idbook']
    ImgPath=imgtest.PhotoSave(photoOB,srcpath,idbook)
    Myidbook=idbook
    if ImgPath!='':
        try:
            BookPictureOB = BookPicture.objects.get(idbook=Myidbook)
            oldpath =BookPictureOB.picture
            BookPictureOB.picture=ImgPath
            print oldpath
            BookPictureOB.save()
            if dir(oldpath):
                try:
                    os.remove(oldpath)
                except WindowsError:
                    print("文件不存在")
            else:
                pass
        except ObjectDoesNotExist:
            try:
                BookPictureOB = BookPicture.objects.create(idbook=Myidbook)
            except ValueError:
                resp['info'] = "图书数据库中没有该ID"
        resp['info']="img save success"
        return HttpResponse(json.dumps(resp))
    else:
        resp['info']="存储图片失败"
        return  HttpResponseNotFound(json.dumps(resp))
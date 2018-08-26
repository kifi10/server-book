# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse,HttpResponseNotFound
from django.shortcuts import get_object_or_404
from django.contrib import auth
from django.contrib.auth.models import User
from django import forms
from bookshop.models import BookContent,BookPrice,BookPicture
from django.contrib.auth.decorators import login_required
import json
import imgtest
import Image

# Create your views here.

def showimg(request):
    Myidbook = request.GET['idbook']
    MyidbookOB = get_object_or_404(BookPicture, idbook=Myidbook)
    bookimgpath = MyidbookOB.picture
    return HttpResponse(json.dumps(bookimgpath, ensure_ascii=False), content_type="application/json")

def upload(request):
    resp = {}
    srcpath="D:/kifi"
    photoOB=IMG(request.FILES.get('file'))
    idbook=request.POST['idbook']
    ImgPath=imgtest.PhotoSave(photoOB,srcpath,idbook)
    if ImgPath!='':
        BookPictureOB=BookPicture.objects.get_or_create(idbook=idbook)
        BookPictureOB.first()['picture']=ImgPath
        resp['info']="img save success"
        return HttpResponse(json.dumps(resp))
    else:
        resp['info']="存储图片失败"
        return  HttpResponseNotFound(json.dumps(resp))
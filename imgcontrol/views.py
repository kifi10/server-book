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

# Create your views here.

def showimg(request):
    Myidbook = request.GET['idbook']
    MyidbookOB = get_object_or_404(BookPicture, idbook=Myidbook)
    bookimgpath = MyidbookOB.picture
    return HttpResponse(json.dumps(bookimgpath, ensure_ascii=False), content_type="application/json")
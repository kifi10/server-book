# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse,HttpResponseNotFound
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from django.contrib import auth
from django.contrib.auth.models import User
from django import forms
from bookshop.models import BookContent,BookPrice,BookPicture
from django.contrib.auth.decorators import login_required
from JsonUpdate import CJsonEncoder

import json

# Create your views here.

def regist(request):
    if request.method == 'GET':
        uf = UserForm()
        return HttpResponse(request,'static/login.html')
    if request.method=='POST':
        uf=UserForm(request.POST)
        if uf.is_valid():
            tempusername = uf.cleaned_data['username']
            temppassword = uf.cleaned_data['password']
    try:
        User.objects.get(username=tempusername)
        data = {'code': '-7', 'info': u'添加用户失败'}
    except User.DoesNotExist:
        user = User.objects.create_user(username=tempusername, password=temppassword)
        if user is not None:
            user.is_active = True
            user.save()
            data={'code':'200','info':u'用户创建成功'}
    return HttpResponse(json.dumps(data,ensure_ascii=False),content_type="application/json")

def login(request):
    if request.method == 'GET':
        uf = UserForm()
        return HttpResponse(request,'static/login.html')
    if request.method=='POST':
        uf = UserForm(request.POST)
        print uf
        if uf.is_valid():
            print('!!')
            username = uf.cleaned_data['username']
            password = uf.cleaned_data['password']
            user = auth.authenticate(username=username, password=password)
            if user is not None and user.is_active:
                auth.login(request, user)  #将userid存入session中
                #return render('login.html', RequestContext(request))
                return HttpResponse('success')
            else:
                return HttpResponse(status=404)
        else:
            return HttpResponse(status=404)

def logout_views(request):
    auth.logout(request)
    response=HttpResponse()
    response.write("logout success!")
    response(status=200)
    return response





def home(request):
    book1=BookContent()
    at=BookContent.objects.filter().all()
    print(at)
    at=at.reverse()
    print at.count()
    print at[0].bookname
    return render(request, 'bookshop/index.html')

def user(request):
    user=request.GET('user')
    print(user)
    myget=User.objects.filter().all(filter=user)
    if myget.exists():
        isadmin=myget[0].iswebadmin
    else:
        return -1
    return isadmin

@login_required
def booklist(request):
    try:
        myget=BookContent.objects.filter().all()
        resp={}
        books=[]
        for tempbook in myget:
            book={}
            book['name']=tempbook.bookname.encode()
            book['author'] = tempbook.author.encode()
            book['idbook']=tempbook.idbook
            books.append(book)
        resp['typename']='hot'
        resp['books']=books
    except:
        resp={}
    return HttpResponse(json.dumps(resp,ensure_ascii=False), content_type="application/json")



@login_required
def bookDetail(request):
    MyBookPrice=0
    if request.method=="POST":
        Myidbook=request.POST['bookid']
        ##查询bookcontent数据库表，获得MyBook对象
        try:
            MyBook=BookContent.objects.get(idbook=Myidbook)
        except:
            resp={}
            resp['info']='idbook is not found'
            return HttpResponse(json.dumps(resp),status=404)
        resp={}
        ##查询BookPrice数据库表，获得书的价格3
        if BookPrice.objects.filter(idbook=Myidbook).exists():
            MyBookPriceOB =BookPrice.objects.filter(idbook=Myidbook).values('bookprice')
            MyBookPrice=MyBookPriceOB[0]['bookprice']
        else:
            MyBookPrice=0

        resp['bookname']=MyBook[0].bookname
        resp['bookauth']=MyBook[0].author
        resp['bookyear']=MyBook[0].year
        resp['bookdescription']=MyBook[0].description
        resp['bookprice']=MyBookPrice
        return HttpResponse(json.dumps(resp,ensure_ascii=False,cls=CJsonEncoder),content_type="application/json")  #中文化编码
    else:
        error={}
        info="Method is not Right"
        error['info']=info
        return HttpResponseNotFound(json.dump(error),content_type="application/json")




class UserForm(forms.Form):
    username = forms.CharField(label='用户名', max_length=100)
    password = forms.CharField(label='密码', widget=forms.PasswordInput())






def proving(request):
    v=request.session.session_key
    return HttpResponse(v)

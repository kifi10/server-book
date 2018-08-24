# -*- coding: utf-8 -*-
from bookshop.models import BookContent
class Book:
    def __init__(self,idbook,bookname='',author='',year=''):
        self.TempBook = BookContent()
        self.idbook=idbook
        self.bookname=bookname
        self.author=author
        self.year=year
    def select(self):
        TempBook = self.TempBook
        TempBook.objects.all()





    def save(self):
        TempBook=self.TempBook
        TempBook.idbook=self.idbook
        TempBook.bookname = self.bookname
        TempBook.author = self.author
        TempBook.year   = self.year
        TempBook.author = self.author











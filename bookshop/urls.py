from django.conf.urls import url
from django.contrib import admin
from bookshop import views as bookshop_views

urlpatterns = [
    url(r'^home$', bookshop_views.home),
    url(r'^admin/', admin.site.urls),
    url(r'^booklist',bookshop_views.booklist),
    url(r'^login/$',bookshop_views.login),
    url(r'^logout/$',bookshop_views.login),
    url(r'proving/$',bookshop_views.proving),
    url(r'^regist/$',bookshop_views.regist),

]
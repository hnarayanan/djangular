from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'djangular.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^accounts/login/$', auth_views.login, {'template_name': 'login.html'}),
    url(r'^app/', login_required(TemplateView.as_view(template_name="index.html"))),
    url(r'^admin/', include(admin.site.urls)),
)

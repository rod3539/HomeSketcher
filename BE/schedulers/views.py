from django.shortcuts import render
from django.conf import settings
import datetime
from util.redisExport import redisExport
# Create your views here.

# redis 결과 보내기
def redisViewsDataExport():
    #날짜 셋팅
    now = datetime.datetime.now()
    
    viewsData = redisExport()
    print("viewsData ", viewsData)
    
    subject = str(now.year) + '년 ' + str(now.month) + '월 ' + str(now.day) + '일 ' + str(now.hour) + '조회수 데이터를 보냅니다.'
    data = viewsData
    
    print("result data ", subject)
    print("result data ", data)
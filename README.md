
[!ionic](http://ionicframework.com/getting-started/)

### for centos

 1.install rvm [rvm](https://www.rvm.io/)
 
    ```
        # gpg --keyserver hkp://keys.gnupg.net --recv-keys D39DC0E3
        
        # \curl -sSL https://get.rvm.io | bash -s stable
    ```
 
 2.install ruby 1.9.3
    
    ```
        # rvm get stable       (更新)
        # rvm list known      （查看）
        # rvm install 1.9.3   （安装）
    ```
 3.install sass
    
    ```
        # gem install sass
    ```
    
 4.install node js
    
    ```
        # su - root
        # curl -sL https://rpm.nodesource.com/setup | bash -
        # yum install -y nodejs
    ```
    
 5.install ionic
 
    ```
        # npm install -g cordova ionic
    ```
 
 6.create project
 
    ```
        set ANDROID_HOME to your path
        set ANT_HOME to your path
        ionic start HelloWorld tabs
        ionic platform add android/ios
        ionic build android/ios
        ionic emulate/run android
    ```

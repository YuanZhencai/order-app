angular.module('order.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($log, $scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($log, $scope, $location) {
        console.debug("AccountCtrl()");
        $scope.settings = {enableFriends: true};
        $scope.user = JSON.parse(localStorage.getItem("user"));

        $scope.logout = function () {
            $log.debug("logout()");
            localStorage.removeItem("user");
            $location.path("/login");
        };

    })

    .controller('MenuCtrl', function ($scope, $log, $stateParams, MenuService) {
        $scope.menus = {};
        $scope.error = {};
        $scope.pager = {};
        $scope.menu = {};

        $scope.findMenus = function () {
            $log.debug("findMenus()");
            return MenuService.findMenus($scope.pager).then((function (data) {
                console.debug("Promise returned " + data.value.list.length + " menus");
                $scope.menus = data.value.list;

            }), function (error) {
                console.error("Unable to find menus: " + error);
                $scope.error = error;
            });
        };

        $scope.findMenuDetail = function () {
            $log.debug("findMenuDetail()");
            return MenuService.findMenus({"filter": {"EQI_id": $stateParams.menuId }}).then((function (data) {
                console.debug("Promise returned " + data.value.list.length + " menus");
                $scope.menu = data.value.list[0];

            }), function (error) {
                console.error("Unable to find menus: " + error);
                $scope.error = error;
            });
        };

        $scope.add = function (menu) {
            $log.debug("add menu #{angular.toJson(@recommend, true)}");
        };
    })
    .controller('LoginCtrl', function ($scope, $log, $stateParams, $location, LoginService) {
        $scope.error = {};
        $scope.user = {};
        $scope.message = {};


        $scope.login = function () {
            $log.debug("login()");
            return LoginService.login($scope.user).then((function (data) {
                console.debug("login  ", data);
                $scope.message = data;
                localStorage.setItem("user", JSON.stringify(data.value));
                if (data.message.code === '0101') {
                    $location.path("/tab/dash");
                }

            }), function (error) {
                console.error("Unable to login " + error);
                $scope.message = error;
            });
        };

    })

;

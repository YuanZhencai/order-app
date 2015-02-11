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

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
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
        }
    })

;

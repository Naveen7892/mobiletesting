//  controllers
(function() {
'use strict';

    angular
        .module('testing.datatable')
        .controller('DatatableController', DatatableController);

    DatatableController.inject = ['$scope', '$ionicScrollDelegate'];
    function DatatableController($scope, $ionicScrollDelegate) {
        var vm = this;
        
        activate();

        ////////////////

        function activate() { }

        // Process to be done before entering the page
        $scope.$on('$ionicView.beforeEnter', beforeEnter);

        function beforeEnter(event, data) {
            $scope.data = [
                {"id":1,"descricao":"TEST1","valorLiquido":22003.06,"valorBruto":22807.63,"vendas":209,
                "quantidade":567,"custo":11104.06,"valorDesconto":804.57,"markup":98.15,"ticketMedio":105.28,"quantidadeMedia":2.71,"precoMedio":38.81
                },{"id":6,"descricao":"TEST2","valorLiquido":10351.62,"valorBruto":10458.54,"vendas":109,"quantidade":286,
                "custo":4778.04,"valorDesconto":106.92,"markup":116.65,"ticketMedio":94.97,"quantidadeMedia":2.62,"precoMedio":36.19
                },{"id":7,"descricao":"TEST3","valorLiquido":16517.80,"valorBruto":16935.61,"vendas":129,"quantidade":464,"custo":8092.04, "valorDesconto":417.81,"markup":104.12,"ticketMedio":128.05,"quantidadeMedia":3.6,"precoMedio":35.6
                },{"id":8,"descricao":"TEST11","valorLiquido":4559.11,"valorBruto":4741.61,"vendas":62,"quantidade":160,"custo":2245.48,
                "valorDesconto":182.5,"markup":103.04,"ticketMedio":73.53,"quantidadeMedia":2.58,"precoMedio":28.49
                },{"id":10,"descricao":"TEST4","valorLiquido":7998.88,"valorBruto":9047.07,"vendas":58,"quantidade":171,
                "custo":4428.38,"valorDesconto":1048.19,"markup":80.63,"ticketMedio":137.91,"quantidadeMedia":2.95,"precoMedio":46.78
                },{"id":14,"descricao":"TEST11","valorLiquido":12517.09,"valorBruto":12766.19,"vendas":98,"quantidade":294,"custo":5546.59,
                "valorDesconto":249.1,"markup":125.67,"ticketMedio":127.73,"quantidadeMedia":3.0,"precoMedio":42.58
                },{"id":321,"descricao":"TEST6","valorLiquido":10352.53,"valorBruto":10846.78,"vendas":135,"quantidade":399,
                "custo":4873.04,"valorDesconto":494.25,"markup":112.45,"ticketMedio":76.69,"quantidadeMedia":2.96,"precoMedio":25.95
                },{"id":123,"descricao":"TEST5","valorLiquido":494.91,"valorBruto":494.91,"vendas":5,"quantidade":18,"custo":222.61,
                "valorDesconto":0.0,"markup":122.33,"ticketMedio":98.98,"quantidadeMedia":3.6,"precoMedio":27.5
                },{"id":333,"descricao":"TEST7","valorLiquido":2480.96,"valorBruto":2867.50,
                "vendas":50,"quantidade":118,"custo":1311.31,"valorDesconto":386.54,"markup":89.2,"ticketMedio":49.62,"quantidadeMedia":2.36,"precoMedio":21.03
                },{"id":112,"descricao":"TEST8","valorLiquido":1535.33,"valorBruto":1645.22,"vendas":12,"quantidade":35,"custo":696.28,
                "valorDesconto":109.89,"markup":120.5,"ticketMedio":127.94,"quantidadeMedia":2.92,"precoMedio":43.87
                },{"id":259770,"descricao":"TEST10","valorLiquido":2880.78,"valorBruto":2944.22,"vendas":20,"quantidade":66,
                "custo":1351.83,"valorDesconto":63.44,"markup":113.1,"ticketMedio":144.04,"quantidadeMedia":3.3,"precoMedio":43.65
                },{"id":1212,"descricao":"TEST9","valorLiquido":2552.77,"valorBruto":2616.48,"vendas":21,"quantidade":58,
                "custo":863.53,"valorDesconto":63.72,"markup":195.62,"ticketMedio":121.56,"quantidadeMedia":2.76,"precoMedio":44.01}
            ];
        }

        $scope.data = [];
        // calculating the summary
        $scope.sum = {
            valorLiquido: 0, valorBruto: 0, vendas: 0, quantidade: 0, custo: 0, valorDesconto: 0
        };

        for (var idx = 0; idx < $scope.data.length-1; idx++) {
            for (var key in $scope.sum) {
                $scope.sum[key] += $scope.data[idx][key];
            }
        }
        $scope.sum.markup = ($scope.sum.valorLiquido / $scope.sum.custo - 1) * 100;
        $scope.sum.ticketMedio = $scope.sum.valorLiquido / $scope.sum.vendas;
        $scope.sum.quantidadeMedia = $scope.sum.quantidade / $scope.sum.vendas;
        $scope.sum.precoMedio = $scope.sum.valorLiquido / $scope.sum.quantidade;

        // table sorting
        $scope.predicate = 'descricao';
        $scope.desc = false;


        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.sort = function(key) {
            if ($scope.predicate == key)
            $scope.desc = !$scope.desc;
            else
            $scope.predicate = key;
        }

        var adjusting = false;

        $scope.scrollMirror = function(from, to) {
            if (adjusting) {
            adjusting = false;
            } else {
            // Mirroring zoom level
            var zoomFrom = $ionicScrollDelegate.$getByHandle(from).getScrollView().getValues().zoom;
            var zoomTo = $ionicScrollDelegate.$getByHandle(to).getScrollView().getValues().zoom;

            if (zoomFrom != zoomTo) {
                $ionicScrollDelegate.$getByHandle(to).getScrollView().zoomTo(zoomFrom);
            }

            // Mirroring left position
            $ionicScrollDelegate.$getByHandle(to).scrollTo($ionicScrollDelegate.$getByHandle(from).getScrollPosition().left,
            $ionicScrollDelegate.$getByHandle(to).getScrollPosition().top);

            adjusting = true;
            }
        }
    }
})();
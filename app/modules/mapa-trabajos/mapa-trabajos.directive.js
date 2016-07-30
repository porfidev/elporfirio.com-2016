/**
 * Created by elporfirio on 30/07/16.
 */
(function () {
    'use strict';

    angular
        .module('elporfirio.com')
        .directive('mapaTrabajos', mapaTrabajos);

    function mapaTrabajos() {
        var directive = {
            bindToController: true,
            controller: MapaTrabajosController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {},
            template: '<div id="map" style="height: 600px; width: 100%;"></div>'
        };
        return directive;

        function link(scope, element, attrs, controller) {
            var divMap = document.getElementById('map');
            var options = {
                center: {lat: 19.4149, lng: -99.1774},
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            controller.initMap(divMap,options);
        }
    }

    function MapaTrabajosController() {
        var vm = this;

        vm.map = null;
        vm.markers = null;
        vm.activeInfoWindow = null;

        var jobs = [
            {
              name: 'refacciones para Máquinas de Coser',
                position: {
                    lat: 19.618483,
                    lng: -99.309012
                }
            },
            {
              name: 'Walmart Ciudad Satelite',
                position: {
                    lat: 19.5155,
                    lng: -99.231108
                }
            },
            {
                name: 'compumarket',
                position: {
                    lat: 19.619280,
                    lng: -99.310930
                }
            },
            {
              name: 'Huateke Flow',
                position: {
                    lat: 19.617143,
                    lng: -99.298667
                }
            },
            {
              name: 'ATSE: Asesores en Tecnologia y Servicios Empresariales',
                position: {
                    lat: 19.600539,
                    lng: -99.284486
                }
            },
            {
              name: 'DIF Coacalco',
                position: {
                    lat: 19.6286745,
                    lng: -99.10447950000002
                }
            },
            {
                name: 'iC Intracom',
                position: {
                    lat: 19.657244,
                    lng: -99.185832
                }
            },
            {
                name: 'SIJISA - Akumen',
                position: {
                    lat: 19.461474,
                    lng: -99.229701
                }
            },
            {
                name: 'Omnitracs',
                position: {
                    lat: 19.365718,
                    lng: -99.172113
                }
            },
            {
                name: 'HITSS',
                position: {
                    lat: 19.428535,
                    lng: -99.165696
                }
            },
            {
                name: 'TELMEX',
                position: {
                    lat: 19.434687,
                    lng: -99.167291
                }
            },
            {
                name: 'Planet Media',
                position: {
                    lat: 19.430365,
                    lng: -99.210816
                }
            },
            {
                name: 'Mook Consulting',
                position: {
                    lat: 19.517385,
                    lng: -99.20979
                }
            }
        ];

        vm.initMap = initMap;

        function initMap(divMap, options){
            //divMap = document.getElementById('delivery-map');

            vm.options = {
                center: {lat: 19.4149, lng: -99.1774},
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            vm.map = new google.maps.Map(divMap, options);

            vm.markers = [];
            addJobsMarkers();
        }

        function addJobsMarkers(){
            var image = '/img/marcador-mapa.png';

            jobs.forEach(function(job){


                var marker = new google.maps.Marker({
                    map: vm.map,
                    position: job.position,
                    title: job.name,
                    icon: image
                });

                var infowindow = new google.maps.InfoWindow({
                    content: '<h3>' + job.name + '</h3>',
                    maxWidth: 400
                });



                marker.addListener('click', function(){
                    if(vm.activeInfoWindow !== null){
                        vm.activeInfoWindow.close();
                    }

                    vm.activeInfoWindow = infowindow;
                    infowindow.open(vm.map, marker);
                });

                vm.markers.push(marker);
            });

            fitBounds();
        }

        function fitBounds(){
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < vm.markers.length; i++) {
                bounds.extend(vm.markers[i].getPosition());
            }

            vm.map.fitBounds(bounds);
        }
    }

})();


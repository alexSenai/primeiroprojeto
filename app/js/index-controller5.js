/**
 * Created by Alex on 06/11/2015.
 */
angular.module('helloworld',['ngMessages', 'ui.growl']);

angular.module('helloworld').controller('IndexController', IndexController);

IndexController.$inject = ['$scope','AlertService'];

function IndexController($scope, AlertService){
    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;

    function salvar(){
        if($scope.myForm.$invalid === true){

        //    $growl.box('Observe','Verifique os campos invalidos', {
        //        class: 'danger',
        //        timeout: 3000
        //}).open();

            AlertService.showAlert('Ok','Verifique os campos invalidos');

        return;

}
        $scope.listaDePessoas.push($scope.entidade);

        //$scope.dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');

        //$growl.box('ok','Registro Salvo com Sucesso',{
        //    class: 'success',
        //    timeout: 3000
        //}).open();

        AlertService.showOk('Ok','Registro Salvo com sucesso');
        limpar();
    }

    function limpar(){
        $scope.entidade = {};
        //$growl.box('ok','Registro apagado com Sucesso',{
        //    class: 'success',
        //    timeout: 3000
        //}).open();

        //AlertService.showOk('Ok','Registro apagado com Sucesso');
    }


}



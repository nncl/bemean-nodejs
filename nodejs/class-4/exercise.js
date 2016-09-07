'use strict';

/**
 * Criar uma função com uma entrada para nome e imprimir esta entrada
 * em uma outra função, como continuação da execução da mesma.
 */

var callback = (v) => {
    return console.log(v);
};

var sayName = (name) => {
    callback(name);
};

sayName('John');

/**
 * Criar uma função que calcula a soma de dois valores e passe o resultado
 * em uma outra função e imprima-o, de acordo com o padrão apresentado
 * em aula :)
 */

var calc = (param, param2) => {
    var sum = param + param2;
    callback(sum);
    return sum;
};

calc(1, 8);

/**
 * Criar uma função que calcula a média de dois valores e imprima essa
 * média em uma outra função, como continuação da execução da mesma
 */

var calcAverage = (param, param2) => {
    var qtt = 2;
    var sum = calc(param, param2);
    var average = (sum / qtt);
    callback('Average is ' + average);
};

calcAverage(1, 2);

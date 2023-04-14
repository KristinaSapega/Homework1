/* Сделайте функцию, которая принимает параметром номер месяца (от 1 до 12)
 и возвращает время года, в которое попадает этот месяц 
 ("Зима", "Лето", "Весна", "Осень").
Придумайте, как должна работать функция, если ей передать неправильный параметр.
Выведите пример использования функции в консоль.
Для решения задачи используйте конструкцию else if и логические операторы 
|| (логическое ИЛИ) и && (логическое И).*/


function getSeason(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12) {
        alert('Неправильный номер месяца');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert('Лето');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        alert('Осень');
    } else {
        alert('Зима');
    }
}
    let userInput = Number(prompt('Введите номер месяца'));
    getSeason(userInput);
    document.querySelector("button").addEventListener("click", getSeason(userInput));

    
    
# learning-js
Раздел 1.
    <script src="file.js">
      alert(1); // содержимое игнорируется, так как есть атрибут src
    </script>
    Атрибуты type и language необязательны.

    Скрипт во внешнем файле можно вставить с помощью <script src="path/to/script.js"></script>.

Раздел 2.
    // Этот комментарий занимает всю строку
    alert('Привет');

    alert('Мир'); // Этот комментарий следует за инструкцией

    /* Пример с двумя сообщениями.
    Это - многострочный комментарий.
    */
    alert('Привет');

Раздел 3.
    «use strict»
    Директива выглядит как строка: "use strict" или 'use strict'. Когда она находится в начале скрипта, весь сценарий работает в «современном» режиме.
    Например:
    "use strict";
    // этот код работает в современном режиме
    ...

Раздел 4.
    Переменная – это «именованное хранилище» для данных. Мы можем использовать переменные для хранения товаров, посетителей и других данных.
    Для создания переменной в JavaScript используйте ключевое слово let.

    let hello = 'Hello world!';
    let message;
    // копируем значение 'Hello world' из переменной hello в переменную message
    message = hello;
    // теперь две переменные содержат одинаковые данные
    alert(hello); // Hello world!
    alert(message); // Hello world!

Раздел 5. Типы данных
    Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:
    let message = "hello";
    message = 123456; 

    Число
    let n = 123;
    n = 12.345;
    Числовой тип данных (number) представляет как целочисленные значения, так и числа с плавающей точкой.

    Строка
    Строка (string) в JavaScript должна быть заключена в кавычки.
    let str = "Привет";
    let str2 = 'Одинарные кавычки тоже подойдут';
    let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

    В JavaScript существует три типа кавычек.
    Двойные кавычки: "Привет".
    Одинарные кавычки: 'Привет'.
    Обратные кавычки: `Привет`.
    let name = "Иван";
    // Вставим переменную
    alert( `Привет, ${name}!` ); // Привет, Иван!
    // Вставим выражение
    alert( `результат: ${1 + 2}` ); // результат: 3

    Булевый (логический) тип
    Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь).
    Такой тип, как правило, используется для хранения значений да/нет: true значит «да, правильно», а false значит «нет, не правильно».
    Например:
    let nameFieldChecked = true; // да, поле отмечено
    let ageFieldChecked = false; // нет, поле не отмечено

    Значение «null»
    Специальное значение null не относится ни к одному из типов, описанных выше.
    Оно формирует отдельный тип, который содержит только значение null:
    let age = null;

    Значение «undefined»
    Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.
    Оно означает, что «значение не было присвоено».
    Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined:
    let x;
    alert(x); // выведет "undefined"

    Оператор typeof
    Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.
    У него есть два синтаксиса:
    Синтаксис оператора: typeof x.
    Синтаксис функции: typeof(x).

    В JavaScript есть 7 основных типов.
        number для любых чисел: целочисленных или чисел с плавающей точкой.
        string для строк. Строка может содержать один или больше символов, нет отдельного символьного типа.
        boolean для true/false.
        null для неизвестных значений – отдельный тип, имеющий одно значение null.
        undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
        object для более сложных структур данных.
        symbol для уникальных идентификаторов.
           Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.
        Имеет две формы: typeof x или typeof(x).
        Возвращает строку с именем типа. Например, "string".
        Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.

    let name = "Ilya";
    alert(`hello ${1}`);        =1
    alert(`hello ${"name"}`);   =name
    alert(`hello ${name}`);     =Ilya

Раздел 6. Преобразование типов.
    - строковое
        String(123)                   // '123'
        String(-12.3)                 // '-12.3'
        String(null)                  // 'null'
        String(undefined)             // 'undefined'
        String(true)                  // 'true'
        String(false)                 // 'false'
        String(Symbol('my symbol'))   // 'Symbol(my symbol)'
        '' + Symbol('my symbol')      // TypeError is thrown
    - булевое
        Для явного преобразования к булевому значению, нужно применить функцию Boolean(). 
        Неявное преобразование происходит в логическом контексте if (val) { … } или при применении логических операторов (|| && !).
            И ( &&)
                    var a1 =  true && true;     // t && t returns true
                    var a2 =  true && false;    // t && f returns false
                    var a3 = false && true;     // f && t returns false
                    var a4 = false && (3 == 4); // f && f returns false
                    var a5 = 'Cat' && 'Dog';    // t && t returns Dog
                    var a6 = false && 'Cat';    // f && t returns false
                    var a7 = 'Cat' && false;    // t && f returns false
            ИЛИ ( ||)
                    var o1 =  true || true;     // t || t returns true
                    var o2 = false || true;     // f || t returns true
                    var o3 =  true || false;    // t || f returns true
                    var o4 = false || (3 == 4); // f || f returns false
                    var o5 = 'Cat' || 'Dog';    // t || t returns Cat
                    var o6 = false || 'Cat';    // f || t returns Cat
                    var o7 = 'Cat' || false;    // t || f returns Cat
            НЕ ( !)
                    var n1 = !true;  // !t returns false
                    var n2 = !false; // !f returns true
                    var n3 = !'Cat'; // !t returns false
        Boolean(2)          // explicit
        if (2) { ... }      // implicit due to logical context
        !!2                 // implicit due to logical operator
        2 || 'hello'        // implicit due to logical operator

    - численное

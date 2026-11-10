
(() => {

    // Arreglo de temperaturas Celsius
    const celsiusTemperatures = [33.6, 12.34];

    // Dirección IP del servidor
    const serverIpAddress = '123.123.123.123';

    // Listado de usuarios
    const users = [
        { id: 1, email: 'fernando@google.com' },
        { id: 2, email: 'juan@google.com' },
        { id: 3, email: 'melissa@google.com' }
    ];

    // Listado de emails de los usuarios
    const userEmails = users.map(user => user.email);

    // Variables booleanas de un videojuego
    const canJump = false;
    const canRun = true;
    const hasNoItems = true;
    const isLoading = false;

    // Otros ejercicios

    // Tiempo inicial
    const startTime = new Date().getTime();

    // ....
    // 3 doritos después
    // ...

    // Tiempo transcurrido al final
    const elapsedTime = new Date().getTime() - startTime;


    // Funciones

    // Obtiene los libros
    function getBooks(): never {
        throw new Error('Function not implemented.');
    }

    // Obtiene libros desde una URL
    function getBooksFromUrl(url: string): never {
        throw new Error('Function not implemented.');
    }

    // Obtiene el área de un cuadrado basado en sus lados
    function calculateSquareArea(side: number): never {
        throw new Error('Function not implemented.');
    }

    // Imprime el trabajo si está activo
    function printJobIfActive(): never {
        throw new Error('Function not implemented.');
    }

})();

(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ];

    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map((file) => file.flagged);

    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea

    // Día de hoy - today
    const currentDate = new Date();

    // Días transcurridos - elapsed time in days
    const elapsedDays: number = 23;

    // Número de archivos en un directorio - number of files in directory
    const directoryFileCount = 33;

    // Primer nombre - first name
    const firstName = 'Fernando';

    // Primer apellido - last name
    const lastName = 'Herrera';

    // Días desde la última modificación - days since modification
    const daysSinceModification = 12;

    // Cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;


})();
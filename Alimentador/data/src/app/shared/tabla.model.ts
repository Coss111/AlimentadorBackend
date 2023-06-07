export class DispensingModel{
    
    constructor(
        public id_dispensing: number,
        public tipo: string,
        public disponibilidad: boolean,
        public fechaHora: string,
    ){}
} 

export class CleaningModel{
    
    constructor(
        public id_cleaning: number,
        public tipo: string,
        public fechaHora: string,
        public limpiado: boolean,
    ){}
} 

export class ScheduleModel{
    
    constructor(
        public id_schedule : number,
        public tipo: string,
        public horario: string,
    ){}
} 
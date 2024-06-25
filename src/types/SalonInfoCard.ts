export interface SalonInfoCardType {
    parameter:{ 
        image: string;
        salonId: number;
        salonName: string;
        salonLocation: string;
        salonMarks: string;
        salonComment: number;
        salonTag: Array<string>;
        discount: boolean;
        salonDescription: string;
    }
}
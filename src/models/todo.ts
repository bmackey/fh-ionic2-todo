export interface Todo {
    id: number;
    created: Date;
    title: string;
    description: string;
    scheduled: Date;
    allDay: boolean;
    start: Date;
    end: Date;
    setReminder: boolean;
    reminder: number;
    location: String;
    image: String;
    participants: String;
    completed: boolean;
    completedOn: Date;
}
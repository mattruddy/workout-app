export interface workout {
    name: string;
    exercises: exercise[];
}

export interface exercise {
    name: string;
    sets: set[];
}

export interface set {
    weight: number;
    reps: number;
}

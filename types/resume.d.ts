export interface Resume {
    type: 'student'|'intern', 
    company_name: string,
    start: string,
    end: string
    current: boolean
}
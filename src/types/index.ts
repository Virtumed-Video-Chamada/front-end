export interface Doctor {
  id?: string;
  nameDoctor?: string;
  crm?: string;
  speciality?: string;
  email?: string;
  password?: string;
  cep?: string;
  cpf?: string;
  rank?: number;
}

export interface Patient {
  id?: string;
  name: string;
  age: string;
  email: string;
  password: string;
  cep: string;
  cpf: string;
}

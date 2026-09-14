export class Vehicle {
    carId: number;
  brand: string;
  model: string;
  year: string;
  color: string;
  dailyRate: string;
  carImage: string;
  regNo: string

  constructor() {
    this.brand = '';
    this.carId = 0;
    this.carImage= '';
    this.color = '';
    this.dailyRate = '';
    this.model = '';
    this.regNo = '';
    this.year = ''
  }
}
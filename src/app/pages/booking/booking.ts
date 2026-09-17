import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Master } from '../../services/master';
import { IApiResponse } from '../../models/common.model';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-booking',
  styleUrl: './booking.css',
  templateUrl: './booking.html',
})
export class Booking implements OnInit {
  bookingForm!: FormGroup;
  master = inject(Master);
  vehicleList = signal<Vehicle[]>([])

  constructor() {
    this.initializeForm()
  }

  ngOnInit(): void {
    this.loadAllVehicles();
  }

  loadAllVehicles() {
    this.master.getAllVehicles().subscribe({
      next:(res:IApiResponse) => {
        this.vehicleList.set(res.data);
      }
    })
  }

  initializeForm() {
    this.bookingForm = new FormGroup({
      customerName: new FormControl(""),
      customerCity: new FormControl(""),
      mobileNo: new FormControl(""),
      email: new FormControl(""),
      bookingId: new FormControl(0),
      carId: new FormControl(""),
      bookingDate: new FormControl(""),
      discount: new FormControl(""),
      totalBillAmount: new FormControl("")

    });
  }

  onSave() {
    debugger
    const formValue = this.bookingForm.value;
    this.master.onSaveBooking(formValue).subscribe({
      next:(res:IApiResponse) => {
        if(res.result) {
          alert("Booking created successfully")
        } else {
          alert(res.message)
        }
      }
    })
  }
}

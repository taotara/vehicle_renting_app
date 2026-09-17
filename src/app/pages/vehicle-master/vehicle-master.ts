import { Component, inject, OnInit, signal} from "@angular/core";
import { Vehicle } from "../../models/vehicle.model";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { IApiResponse } from "../../models/common.model";
import { Master } from "../../services/master";

@Component({
  imports: [FormsModule],
  selector: "app-vehicle-master",
  styleUrl: "./vehicle-master.css",
  templateUrl: "./vehicle-master.html",
})
export class VehicleMaster implements OnInit {

  vehicleObj: Vehicle = new Vehicle();
  vehicleList = signal<Vehicle[]>([])

  http = inject(HttpClient);

  master = inject(Master);

  ngOnInit(): void {
    this.getAllVehicles();
  }

  // getAllVehicles() {
  //   this.http.get<IApiResponse>("https://freeapi.gerasim.in/api/CarRentalApp/GetCars").subscribe({
  //     next:(res:IApiResponse) => {
  //       this.vehicleList.set(res.data)
  //     }
  //   })
  // }

  getAllVehicles() {
    this.master.getAllVehicles().subscribe({
      next:(res:IApiResponse) => {
        this.vehicleList.set(res.data)
      }
    })
  }

  onEditRecord(data:Vehicle) {
    this.vehicleObj = data;
  }

  onSaveVehicle() {
    this.http.post<IApiResponse>("https://freeapi.gerasim.in/api/CarRentalApp/CreateNewCar", this.vehicleObj).subscribe({
      next:(res:any) => {
        if(res.result) {
          alert("Vehicle added successfully")
          this.getAllVehicles();
        } else {
          alert(res.message)
        }
      }, error:(err:IApiResponse) => {

      }
    })
  }

  onUpdateVehicle() {
    this.http.put<IApiResponse>("https://freeapi.gerasim.in/api/CarRentalApp/updateCar", this.vehicleObj).subscribe({
      next:(res:any) => {
        if(res.result) {
          alert("Vehicle updated successfully")
          this.getAllVehicles();
        } else {
          alert(res.message)
        }
      }, error:(err:IApiResponse) => {

      }
    })
  }

  onDeleteVehicle(id: number) {
    const isConfirmed = confirm("Are you sure you want to delete?")
    this.http.delete<IApiResponse>("https://freeapi.gerasim.in/api/CarRentalApp/DeleteCarbyCarId" +id).subscribe({
      next:(res:any) => {
        if(res.result) {
          alert("Vehicle deleted successfully")
          this.getAllVehicles();
        } else {
          alert(res.message)
        }
      }, error:(err:IApiResponse) => {

      }
    })
  }
}

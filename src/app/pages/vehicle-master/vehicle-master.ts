import { Component, inject } from "@angular/core";
import { Vehicle } from "../../models/vehicle.model";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  imports: [FormsModule],
  selector: "app-vehicle-master",
  styleUrl: "./vehicle-master.css",
  templateUrl: "./vehicle-master.html",
})
export class VehicleMaster {

  vehicleObj: Vehicle = new Vehicle();

  http = inject(HttpClient);

  onSaveVehicle() {
    this.http.post("https://freeapi.gerasim.in/api/CarRentalApp/CreateNewCar", this.vehicleObj).subscribe({
      next:(res:any) => {

      }, error:(err:any) => {
        
      }
    })
  }
}

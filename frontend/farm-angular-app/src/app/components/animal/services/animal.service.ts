import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimalDto } from 'src/app/components/animal/dto/animal.dto';
import { CreateAnimalDto } from "src/app/components/animal/dto/create-animal.dto";
import { environment } from "src/environments/environment";

@Injectable()
export class AnimalService {
  private readonly apiUrl: string;

  constructor(private readonly http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getAllAnimals(): Observable<AnimalDto[]> {
    return this.http.get<AnimalDto[]>(`${this.apiUrl}/api/animals`);
  }

  createAnimal(animal: CreateAnimalDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/api/animals`, animal);
  }

  deleteAnimal(animalId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/animals/` + animalId);
  }

  isNameUnique(name: string): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<boolean>(`${this.apiUrl}/api/animals/isNameUnique`, JSON.stringify(name),
        { headers: headers });
  }
}

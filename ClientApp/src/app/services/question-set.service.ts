import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionSet } from '../model/question-set';

@Injectable({
  providedIn: 'root'
})
export class QuestionSetService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getQuestionSets(): Observable<QuestionSet[]> {
    return this.http.get<QuestionSet[]>(this.baseUrl + "api/QuestionSets")
  }

  getQuestionSet(quiestionSetId:string): Observable<QuestionSet> {
    return this.http.get<QuestionSet>(this.baseUrl + "api/QuestionSets/"+quiestionSetId)
  }

  deleteQuestionSet(id: string): Observable<null> {
    return this.http.delete<null>(this.baseUrl + "api/QuestionSets/" + id)
  }

  postQuestionSet(quiz: QuestionSet): Observable<QuestionSet> {
    return this.http.post<QuestionSet>(this.baseUrl + "api/QuestionSets", quiz)
  }
}
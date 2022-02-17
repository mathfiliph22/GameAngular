import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/Models/noticia';
import { User } from 'src/app/Models/user';
import { NoticiaService } from 'src/app/Service/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  listaNoticias= [] as Noticia[];
  noticiaForm = {
    titulo: "Noticia Extra" ,
    descricao: "Descrição da noticia extra"

  }

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    this.carregarNoticias();
  }

  carregarNoticias() {
    this.noticiaService.getNoticias().subscribe((noticiasRecebidas: Noticia[]) => {
      this.listaNoticias = noticiasRecebidas
      console.log(this.listaNoticias)
    })
  }

  salvarNoticia() {

    this.noticiaService.postNoticia(this.noticiaForm).subscribe( (res) => {
      this.carregarNoticias();


    } )

  }

  userModel = new User("","")

  onSubmit () {
    console.log(this.userModel)
  }

}

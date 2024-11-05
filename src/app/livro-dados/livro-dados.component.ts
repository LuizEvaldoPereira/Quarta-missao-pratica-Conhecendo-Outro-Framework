import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';
import { Editora } from '../editora';

@Component({
    selector: 'app-livro-dados',
    templateUrl: './livro-dados.component.html'
})
export class LivroDadosComponent implements OnInit {
    public livro: Livro = new Livro(0, 0, '', '', []);
    public autoresForm: string = '';
    public editoras: Editora[] = [];

    constructor(
        private servEditora: ControleEditoraService,
        private servLivros: ControleLivrosService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.editoras = this.servEditora.getEditoras();
    }

    incluir = () => {
        this.livro.autores = this.autoresForm.split('\n');
        this.servLivros.incluir(this.livro);
        this.router.navigateByUrl('/lista');
    }
}
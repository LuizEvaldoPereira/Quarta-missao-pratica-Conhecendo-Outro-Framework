import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
    providedIn: 'root'
})
export class ControleLivrosService {
    private livros: Livro[] = [
        new Livro(1, 1, 'Livro A', 'Resumo A', ['Autor 1']),
        new Livro(2, 2, 'Livro B', 'Resumo B', ['Autor 2']),
        new Livro(3, 3, 'Livro C', 'Resumo C', ['Autor 3'])
    ];

    obterLivros(): Livro[] {
        return this.livros;
    }

    incluir(livro: Livro): void {
        livro.codigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = this.livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}
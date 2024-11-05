import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
    providedIn: 'root'
})
export class ControleEditoraService {
    private editoras: Editora[] = [
        new Editora(1, 'Editora A'),
        new Editora(2, 'Editora B'),
        new Editora(3, 'Editora C')
    ];

    getEditoras(): Editora[] {
        return this.editoras;
    }

    getNomeEditora(codEditora: number): string {
        const editora = this.editoras.filter(e => e.codEditora === codEditora);
        return editora.length ? editora[0].nome : '';
    }
}
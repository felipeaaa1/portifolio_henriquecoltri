import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-brand-marquee',
  standalone: true,
  imports: [NgFor],
  templateUrl: './brand-marquee.component.html',
  styleUrl: './brand-marquee.component.scss'
})
export class BrandMarqueeComponent {
  directBrands = [
    { name: 'Felipe Cruz', file: 'Logo-Felipe-Cruz.svg', height: 82, width: 55 },
    { name: 'Karine', file: 'Logo-Karine.svg', height: 54, width: 115 },
    { name: 'Santa Imagem', file: 'Logo-Santa-Imagem.svg', height: 82, width: 83 },
    { name: 'Hardcore', file: 'Logo-Hardcore.svg', height: 88, width: 88 },
    { name: 'Religare', file: 'Logo-Religare.svg', height: 54, width: 215 },
    { name: 'Facilnet', file: 'Logo-Facilnet.svg', height: 120, width: 120 },
    { name: 'Escola Livre Porto', file: 'Logo-Livre-Porto.svg', height: 66, width: 297 },
    { name: 'Doces Pôr do Sol', file: 'Logo-Doces-Por-Do-Sol.svg', height: 120, width: 120 },
    { name: 'Fernanda Coltri', file: 'Logo-Fernanda-Coltri.svg', height: 68, width: 444 },
    { name: 'Roomântico Anônimo', file: 'Logo-Roomantico.svg', height: 54, width: 222 },
    { name: 'Lu Pagliarini', file: 'Logo-Lu-pagli.svg', height: 70, width: 426 },
    { name: 'JCELL', file: 'Logo-Jcell.svg', height: 54, width: 193 }
  ];

  agencyBrandsOne = [
    { name: 'Total Varejo', file: 'Logo-Total-Varejo.svg', height: 180, width: 1549 },
    { name: 'Projetando Loja', file: 'Logo-Projetando-Loja.svg', height: 58, width: 299 },
    { name: 'Alkami', file: 'Logo-Alkami.svg', height: 58, width: 251 },
    { name: 'Bahniuk', file: 'Logo-Bahniuk.svg', height: 58, width: 211 },
    { name: 'Bom Preço', file: 'Logo-Bom-preço.svg', height: 58, width: 272 },
    { name: 'Brisas Hotel', file: 'Logo-Brisas-Hotel.svg', height: 58, width: 601 },
    { name: 'Código Real', file: 'Logo-Código-Real.svg', height: 58, width: 230 },
    { name: 'Deon', file: 'Logo-Deon.svg', height: 72, width: 72 },
    { name: 'Devero', file: 'Logo-Devero.svg', height: 58, width: 203 },
    { name: 'Equipa', file: 'Logo-Equipa.svg', height: 58, width: 190 },
    { name: 'Heróis da Galáxia', file: 'Logo-Herois-da-Galaxia.svg', height: 58, width: 101 },
    { name: 'Kasa Estrela', file: 'Logo-Kasa-Estrela.svg', height: 58, width: 337 },
    { name: 'O Jardineiro', file: 'Logo-o-Jardineiro.svg', height: 84, width: 491 },
    { name: 'Parrilla do Campo', file: 'Logo-Parrilla-do-Campo.svg', height: 84, width: 83 },
    { name: 'River', file: 'Logo-River.svg', height: 58, width: 166 },
    { name: 'Servilar', file: 'Logo-Servilar.svg', height: 58, width: 205 },
    { name: 'Wallia', file: 'Logo-Wallia.svg', height: 58, width: 144 }
  ];
}
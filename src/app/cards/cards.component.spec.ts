import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it('1. Deve verificar se o componente foi renderizado', () => {
    const fixture = TestBed.createComponent(CardsComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('2. Deve verificar se a variável buttonColor está com o valor inicial "#ff6452"', () => {
    const fixture = TestBed.createComponent(CardsComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.buttonColor).toEqual('#ff6452');
  });

 

  it('3. Deve chamar a função changeColor ao clicar no botão', () => {
    const fixture = TestBed.createComponent(CardsComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    // Espiona a função changeColor na instância
    spyOn(component, 'changeColor');
    
    // Simula o clique no botão
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    
    // Verifica se a função foi chamada
    expect(component.changeColor).toHaveBeenCalled();
  });

  it('4. Deve verificar a cor do botão inicialmente', () => {
    const fixture = TestBed.createComponent(CardsComponent);
    fixture.detectChanges(); // Detecta mudanças e renderiza o componente

    // Seleciona o botão
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    
    // Obtém os estilos computados do botão
    const buttonStyle = window.getComputedStyle(buttonElement);

    // Verifica se a cor de fundo é a inicial (usando RGB para #ff6452)
    expect(buttonStyle.backgroundColor).toBe('rgb(255, 100, 82)'); // rgb(255, 100, 82) é o código RGB para #ff6452
  });

  it('5. Deve verificar se o p está com o texto correto', () => {
    const fixture = TestBed.createComponent(CardsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Corrida / Casual');
  });

});


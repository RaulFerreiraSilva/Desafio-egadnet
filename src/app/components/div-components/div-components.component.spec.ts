import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivComponentsComponent } from './div-components.component';

describe('DivComponentsComponent', () => {
  let component: DivComponentsComponent;
  let fixture: ComponentFixture<DivComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivComponentsComponent);
    component = fixture.componentInstance;
    
    // Mock dos dados necessários para o componente
    component.desafio = {
      desafio: 'Soma de Números',
      enunciado: 'Calcule a soma de dois números',
      inputs: 2
    };
    
    fixture.detectChanges();
  });

  // Teste 1: Verifica se o componente é criado
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Teste 2: Verifica se o título é atribuído corretamente
  it('should set titleDesafio from desafio input', () => {
    expect(component.titleDesafio).toBe('Soma de Números');
  });

  // Teste 3: Verifica se o texto do enunciado é atribuído corretamente
  it('should set textDesafio from desafio input', () => {
    expect(component.textDesafio).toBe('Calcule a soma de dois números');
  });

  // Teste 4: Verifica se o array de inputs tem o tamanho correto
  it('should create inputs array with correct length', () => {
    expect(component.inputs).toHaveLength(2);
  });

  // Teste 5: Verifica o comportamento com valores diferentes
  it('should handle different number of inputs', () => {
    // Arrange: Prepara dados de teste
    component.desafio = {
      desafio: 'Outro Desafio',
      enunciado: 'Teste com 5 inputs',
      inputs: 5
    };

    // Act: Executa a ação
    component.ngOnInit();

    // Assert: Verifica o resultado
    expect(component.inputs).toHaveLength(5);
    expect(component.titleDesafio).toBe('Outro Desafio');
  });
});

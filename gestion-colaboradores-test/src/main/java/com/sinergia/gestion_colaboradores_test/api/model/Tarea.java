package com.sinergia.gestion_colaboradores_test.api.model;

import jakarta.persistence.*;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tareas")
public class Tarea {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String nombre;

  @ManyToMany(mappedBy = "tareas")
  @JsonIgnore
  private List<Colaborador> colaboradores;

  // Getters y Setters

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public List<Colaborador> getColaboradores() {
    return colaboradores;
  }

  public void setColaboradores(List<Colaborador> colaboradores) {
    this.colaboradores = colaboradores;
  }
}
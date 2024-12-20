import axios from 'axios';

// Retorna todos los colaboradores
export const getColaboradores = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/colaboradores', {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    });
    return response.data;
  } catch(error) {
    console.log(error);
    throw error;
  }
}


// Crear nuevo colaborador
export const createColaborador = async (datos) => {
  try {
    const response = await axios.post('http://localhost:8080/api/colaboradores', datos, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al registrar colaborador:', error);
    throw error;
  }
}

// Borrar colaborador por id
export const deleteColaborador = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/colaboradores/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al borrar colaborador:', error);
    throw error;
  }
}

// Actualizar colaborador por id
export const updateColaborador = async (id, datos) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/colaboradores/${id}`, datos, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al actualizar colaborador:', error);
    throw error;
  }
}

// Retorna los colaboradores asociados a una tarea_id
export const getColaboradoresByTareaId = async (tarea_id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/colaboradores/tarea/${tarea_id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    });
    return response.data;
  } catch(error) {
    console.log(error);
    throw error;
  }
}
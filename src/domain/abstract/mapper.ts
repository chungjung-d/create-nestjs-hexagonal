export interface IMapper<Model, Entity> {
  modelToEntity(_model: Model): Entity;

  entityToModel(_entity: Entity): Model;
}

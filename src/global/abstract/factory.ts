export interface IFactory<RequireType, PropertyType, Model> {
  create(createDTO: RequireType): Model;

  reconstitute(reconstituteDTO: PropertyType): Model;
}

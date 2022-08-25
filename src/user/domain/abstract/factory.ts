export interface IFactory<RequireType, ProperteyType, Model> {
  create(createDTO: RequireType): Model;

  reconstitute(reconstituteDTO: ProperteyType): Model;
}

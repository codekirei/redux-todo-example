const nameOf = component => (
  component.type.WrappedComponent
    ? component.type.WrappedComponent.name
    : component.type.name
)

export default nameOf

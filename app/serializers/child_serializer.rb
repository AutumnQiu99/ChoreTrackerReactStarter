class ChildSerializer
  include FastJsonapi::ObjectSerializer
  attribute :name do |object|
    object.name
  end
end

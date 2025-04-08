class ChoreSerializer
  include FastJsonapi::ObjectSerializer
  attribute :due_on
 
  attribute :child_name do |object|
    object.child.name
  end

  attribute :task_name do |object|
    object.task.name
  end

  attribute :status do |object|
  object.status
  end
end

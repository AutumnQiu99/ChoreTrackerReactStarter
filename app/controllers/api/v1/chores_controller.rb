module Api::V1
  class ChoresController < ApiController
    def index
      @chores = Chore.chronological
      render json: ChoreSerializer.new(@chores).serialized_json
    end

    def toggle_status
      @chore = Chore.find(params[:id])
      @chore.toggle_status
      render json: ChoreSerializer.new(@chore).serialized_json
    end

    def children
      @children = Child.active.alphabetical 
      render json: ChildSerializer.new(@children).serialized_json
    end
    
    def tasks
      @tasks = Task.active.alphabetical
      render json: TaskSerializer.new(@tasks).serialized_json
    end
  end
end

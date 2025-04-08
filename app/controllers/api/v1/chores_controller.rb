module Api::V1
  class ChoresController < ApiController
    def index
      @chores = Chore.chronological
      render json: ChoreSerializer.new(@chores).serialized_json
    end
  end
end

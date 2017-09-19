import { parseArgs, SupervisedLearner, BaselineLearner, run } from 'mlt-ts';

/**
 * Returns the machine learning algorithm class specified.
 * **Note:** When you make a new learning algorithm, you should add a line for it to this method.
 * @param model The name of the machine learning algorithm
 */
function getLearner(model: string): SupervisedLearner {
  switch (model) {
    case 'baseline':
      return new BaselineLearner();
    case 'perceptron':
    // return new Perceptron();
    case 'neuralnet':
    // return new NeuralNet();
    case 'decisiontree':
    // return new DecisionTree();
    case 'knn':
    // return new InstanceBasedLearner();
    default:
      throw new Error('Unrecognized model: ' + model);
  }
}

//Parse the command line arguments
const {
  learnerName,
  fileName,
  evalMethod,
  normalize,
  evalParameter,
  verbose
} = parseArgs();

run(getLearner(learnerName));

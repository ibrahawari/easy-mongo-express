# === imports ===
from __future__ import print_function
import os
import tensorflow as tf
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# === code ===

W = tf.Variable([.3], dtype=tf.float32)
b = tf.Variable([-.3], dtype=tf.float32)
x = tf.placeholder(tf.float32)
linear_model = W * x + b

sess = tf.Session()

init = tf.global_variables_initializer()
sess.run(init)

y = tf.placeholder(tf.float32)  # desired result
# comparison between desired result and output
squared_deltas = tf.square(linear_model - y)
# its abstraction into a scalar value measuring loss
loss = tf.reduce_sum(squared_deltas)

# === training ===
optimizer = tf.train.GradientDescentOptimizer(0.01)
train = optimizer.minimize(loss)
sess.run(init)  # reset values to incorrect defaults.
print(sess.run([W, b]))
for i in range(10):
    sess.run(train, {x: [1, 2, 3, 4], y: [0, -1, -2, -3]})
    print(sess.run([W, b]))
